const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const authMiddleware = require("../middlewares/authMiddleware");
const bookingModel = require("../models/bookingModel");
const showModel = require("../models/showModel");

const router = require("express").Router();

router.post("/make-payment", authMiddleware, async (req, res) => {
  try {
    const { token, amount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      customer: customer.id,
      //payment_method_types: ["card"],
      receipt_email: token.email,
      description: "Token has been assigned to movie.",
    });

    const transactionId = paymentIntent.id;

    res.send({
      success: true,
      message: "Payment successful!",
      data: transactionId,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/book-show", authMiddleware, async (req,res) => {
  try {
    const newBooking = await bookingModel(req.body);
    await newBooking.save();

    const show = await showModel.findById(req.body.show).populate('movie');
    const updatedBookedSeats = [...show.bookedSeats,...req.body.seats];
    show.bookedSeats = updatedBookedSeats;
    await show.save();
    res.send({
        success:true,
        message:"Show booked Successfully!",
        data:newBooking
    })
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/all-booking-by-user", authMiddleware, async (req,res) => {
    try{
        const bookings = await bookingModel.find({user:req.body.userId});
        res.send({
            success:true,
            message:"All bookings by the user have been fetched.",
            data:bookings,
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message,
        })
    }
});

module.exports = router;
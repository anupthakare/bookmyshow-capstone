import React from "react";
import { Table } from "antd";

function MovieList() {
  const movies = [
    {
      key: "1",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydqdrh43pvv73Li27yquEDMzcb5vrMD6W2UEyT1fBIQ&s=10",
      name: "Titanic",
      description:
        "A young aristocrat falls in love with a poor artist aboard the luxurious, ill-fated RMS Titanic.",
      duration: 120,
      genre: "Romance",
      language: "English",
      releaseDate: "March 13, 1998",
    },
    {
      key: "2",
      poster: "Image2",
      name: "Mastaney",
      description:
        "Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ",
      duration: 120,
      genre: "Action",
      language: "Hindi",
      releaseDate: "Oct  25, 2023",
      action: "Delete",
    },
  ];

  const tableHeadings = [
    {
      title: "Poster",
    },
    {
      title: "Movie Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
    },
    {
      title: "Action",
    },
  ];

  return (
    <div>
      <Table columns={tableHeadings} dataSource={movies} />
    </div>
  );
}

export default MovieList;
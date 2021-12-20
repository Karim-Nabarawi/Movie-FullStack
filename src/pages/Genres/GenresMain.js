import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { genresURL } from "../../Api";
import CustomConfirm from "../../Components/utils/CustomConfirm";
import GenericLoading from "../../Components/utils/GenericLoading";
import Pagination from "../../Components/utils/Pagination";
import RecordsPerPage from "../../Components/utils/RecordsPerPage";

const GenresMain = () => {
  const [genres, setGenres] = useState([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  const loadData = () => {
    axios.get(genresURL(), { params: { page, recordsPerPage } }).then((res) => {
      setTotalAmountOfPages(Math.ceil(parseInt(res.headers["totalamountsofrecords"], 10) / recordsPerPage));
      setGenres(res.data);
    });
  };

  const deleteGenre = async (id) => {
    try {
      await axios.delete(`${genresURL()}/${id}`);
      loadData();
    } catch (error) {
      if (error && error.response) console.log(error.response.data);
    }
  };

  return (
    <>
      <h3>Genres</h3>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
      <br />
      <RecordsPerPage
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={(newPage) => setPage(newPage)} />
      <GenericLoading data={genres}>
        <TableContainer className="table table-striped">
          <thead>
            <tr>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td className="alignRight">
                  <Link to={`/genres/edit/${genre.id}`} className="btn btn-success">
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => CustomConfirm(() => deleteGenre(genre.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </GenericLoading>
    </>
  );
};
export default GenresMain;

const TableContainer = styled.table`
  .alignRight {
    text-align: right;
    button {
      margin-left: 15px;
    }
  }
`;

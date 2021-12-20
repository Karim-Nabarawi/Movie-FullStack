import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomConfirm from "./CustomConfirm";
import GenericLoading from "./GenericLoading";
import Pagination from "./Pagination";
import RecordsPerPage from "./RecordsPerPage";

const IndexEntity = ({ url, title, createURL, entityName, children }) => {
  const [entities, setEntities] = useState([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  const loadData = () => {
    axios.get(url, { params: { page, recordsPerPage } }).then((res) => {
      setTotalAmountOfPages(Math.ceil(parseInt(res.headers["totalamountsofrecords"], 10) / recordsPerPage));
      setEntities(res.data);
    });
  };

  const deleteEntity = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      loadData();
    } catch (error) {
      if (error && error.response) console.log(error.response.data);
    }
  };

  const buttons = (editURL, id) => (
    <>
      <td className="alignRight">
        <Link to={editURL} className="btn btn-success">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => CustomConfirm(() => deleteEntity(id))}>
          Delete
        </button>
      </td>
    </>
  );

  return (
    <>
      <h3>{title}</h3>
      <Link to={createURL} className="btn btn-primary">
        Create {entityName}
      </Link>
      <br />
      <RecordsPerPage
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={(newPage) => setPage(newPage)} />
      <GenericLoading data={entities}>
        <TableContainer className="table table-striped">{children(entities, buttons)}</TableContainer>
      </GenericLoading>
    </>
  );
};
export default IndexEntity;

const TableContainer = styled.table`
  .alignRight {
    text-align: right;
    button {
      margin-left: 15px;
    }
  }
`;

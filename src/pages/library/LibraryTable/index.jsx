import React from "react";
import { Table } from "antd";
import { GetBasicTableColumns } from "./getBasicTableColumns";
import { useNavigate } from "react-router-dom";
import "./styles.sass";
import { t } from "i18next";

const LibraryTable = (props) => {
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/library/edit/${record.id}`);
  };
  return (
    <div className="basicLibraryTableContainer">
      <Table
        className="basicLibraryTable"
        columns={GetBasicTableColumns.map((e) => ({ ...e, title: t(e.title) }))}
        dataSource={props?.data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </div>
  );
};

export default LibraryTable;
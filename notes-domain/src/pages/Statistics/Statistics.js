import { Table, Button, Space, Spin } from "antd";
import React from "react";
import { connect } from "react-redux";
import { closeNotes } from "../Notes/actions/actions";
import { loadingSelector, notesSelector } from "../Notes/selectors/notesSelectors";
import { getNoteList } from "../Notes/thunks/notesThunk";
import PropTypes from "prop-types";
import moment from "moment";
// import moment from "moment";

class Statistics extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  componentDidMount() {
    this.props.getData();
  }

  componentWillUnmount() {
    this.props.closeNotes();
  }

  handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  render() {
    const { data, loading } = this.props;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [
          { text: "Joe", value: "Joe" },
          { text: "Jim", value: "Jim" },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Author",
        dataIndex: "author",
        key: "author",
        sorter: (a, b) => a.author - b.author,
        sortOrder: sortedInfo.columnKey === "author" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" },
        ],
        filteredValue: filteredInfo.description || null,
        onFilter: (value, record) => record.description.includes(value),
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === "description" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Creation Date",
        dataIndex: "createDate",
        key: "createDate",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" },
        ],
        filteredValue: filteredInfo.createDate || null,
        onFilter: (value, record) => record.createDate.includes(value),
        render: (text) => {return moment(text).format("MMMM Do YYYY")},
        sorter: (a, b) => a.createDate.length - b.createDate.length,
        sortOrder: sortedInfo.columnKey === "createDate" && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        {loading && (
          <div>
            <Spin /> Loading Statistics...
          </div>
        )}
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: notesSelector(state),
  loading: loadingSelector(state),
});

const mapDispatchToProps = {
  getData: getNoteList,
  closeNotes: closeNotes,
};

Statistics.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  getData: PropTypes.func,
  closeNotes: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);

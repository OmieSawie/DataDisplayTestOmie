import { Space, Table, Tag, Divider } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="javascript:void(0)">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "MachineName",
    dataIndex: "machineName",
    key: "machineName",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href="javascript:void(0)">Invite {record.name}</a>
        <a href="javascript:void(0)">Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    machineName: "armara 450x plus",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    machineName: "vantura ultra pro max",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    machineName: "Bandar Chap",
  },
  {
    key: "4",
    name: "No 4",
    age: 33,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    machineName: "Bandar Chap",
  },
  {
    key: "5",
    name: "No 5",
    age: 40,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    machineName: "Bandar Chap",
  },

  {
    key: "6",
    name: "No 6",
    age: 2,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    machineName: "Bandar Chap",
  },

  {
    key: "7",
    name: "No 7",
    age: 199,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    machineName: "Bandar Chap",
  },
];

function Test1() {
  return (
    <div>
      <div>This is the Datoms data display</div>

      <Table
        columns={columns}
        dataSource={data}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />

      <Divider />
    </div>
  );
}

export default Test1;

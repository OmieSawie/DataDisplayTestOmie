import { Col, Row, Flex, Divider } from "antd";

function Test1() {
  return (
    <div>
      <div>This is the Datoms data display</div>
      <Row gutter={[32, 16]} align={"middle"} justify="space-around">
        {new Array(10).fill(0).map((_, index) => {
          const key = `col-${index}`;
          return (
            <Col
              key={key}
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "20%" }}
              xl={{ flex: "10%" }}
            >
              <div className="text-center">{key} </div>
            </Col>
          );
        })}
      </Row>
      <Divider />
    </div>
  );
}

export default Test1;

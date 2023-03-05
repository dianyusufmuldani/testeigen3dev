import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import { Card } from "antd";
import { Row } from "antd/es/grid";
import ModalDescription from "./componet/modalDescription";

const { Meta } = Card;

type source = {
  id: string;
  name: string;
};

type dataType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  title: string;
  url: string;
  urlToImage: string;
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [dataOne, setDataOne] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-02-05&sortBy=publishedAt&apiKey=19a31287b2564d1183480719307ca74f      "
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      });
  }, []);

  const handleDataClick = (item: dataType) => {
    setIsModalOpen(true);
    setDataOne(item);
    console.log("isi item", item);
  };

  const handleCancel = () => {
    console.log("cancel");
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="title">ARTICEL LIST</h1>
      <br />
      <ModalDescription
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        dataOne={dataOne}
      />
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        {data.map((item: dataType, index: number) => {
          return (
            <div>
              <Card
                onClick={() => handleDataClick(item)}
                style={{
                  width: 300,
                  borderColor: "black",
                  padding: 10,
                  cursor: "pointer",
                }}
                cover={
                  <img
                    alt="example"
                    src={item.urlToImage}
                    className="imageCard"
                  />
                }
                // actions={[
                //   <SettingOutlined key="setting" />,
                //   <EditOutlined key="edit" />,
                //   <EllipsisOutlined key="ellipsis" />,
                // ]}
              >
                <Meta
                  // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
              </Card>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default App;

import { Modal } from "antd";
import { Image } from "antd";

const ModalDescription = ({
  isModalOpen,
  onCancel,
  onOk,
  dataOne,
}: {
  isModalOpen: boolean;
  onCancel: any;
  onOk: any;
  dataOne: any;
}) => {
  return (
    <div>
      <Modal
        title={dataOne.title}
        open={isModalOpen}
        onOk={onOk}
        onCancel={onCancel}
        className="containerModal"
      >
        <Image width={200} src={dataOne.urlToImage} />
        <div className="content">
          <p>Content: {dataOne.content}</p>
          <p>Description: {dataOne.description}</p>
          <p>Published: {dataOne.publishedAt}</p>
          <p>Author: {dataOne.author}</p>
          <a href={dataOne.url}>url: {dataOne.url}</a>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDescription;

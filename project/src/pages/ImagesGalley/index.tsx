import { Photo } from '../../components/Photo';
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";

import { Container, Grid } from './styles';

import { useModal } from '../../hooks/useModal';

import Messi from '../../assets/messi.jpg'
import Messi2 from '../../assets/messi2.jpg'

export default function ImagesGallery() {
  const { openModal, closeModal, modalOpen, textModal, messageModal} = useModal();

  const handleModal = (url: string) => {
    openModal();
    messageModal(url);
  }

  return (
    <Container>
      <h1>Teste as imagens</h1>

      <Grid>
        <Photo onClick={() => handleModal(Messi)} url={Messi} />
        <Photo onClick={() => handleModal(Messi2)} url={Messi2} />
        <Photo onClick={() => handleModal(Messi)} url={Messi} />
        <Photo onClick={() => handleModal(Messi2)} url={Messi2} />
      </Grid>

      <Modal
        height= {"60%"}
        width= {"80%"}
        background={"#A16BDD"}
        modalOpen={modalOpen}
      >
        <Photo url={textModal}/>
        
        <Button
          text={"Teste"}
          color={"red"}
          onClick={closeModal}
        />
      </Modal>
    </Container>
  );
};
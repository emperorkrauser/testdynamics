import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { HospitalForm } from '../data-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(42,51,66)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export const AppModal = (props: {
  isOpenModal: boolean;
  handleClose?: any;
}) => {
  const { isOpenModal, handleClose } = props;
  const handleCloseModal = () => {
    handleClose(false);
    return;
  };

  return (
    <>
      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HospitalForm handleCloseModal={handleCloseModal} />
        </Box>
      </Modal>
    </>
  );
};

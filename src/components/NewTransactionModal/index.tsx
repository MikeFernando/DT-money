import Modal from 'react-modal';
import { Container } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Category" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

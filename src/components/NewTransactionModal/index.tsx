import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

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
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

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

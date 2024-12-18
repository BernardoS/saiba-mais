import React, { useState } from 'react';
import { Post } from '../types/Post';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from './GenericStyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSave } from '@fortawesome/free-solid-svg-icons';

export const SavePostForm = styled.div`
    display:flex;
    flex-direction:column;
`;

export const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    gap:16px;
    margin-bottom:16px;
    &.small-input{
        width:45%;
    }
`;


export const FormLabel = styled.label`
    font-size:24px;
    font-family:'Maven Pro', sans-serif;
    color:#08244B;
    font-weight:600;
`;

export const FormInput = styled.input`
  border-radius:10px;
  border:2px solid #08244B;
  padding:8px 16px;
  min-height: 64px;
  font-size:18px;
  font-family:'Maven Pro', sans-serif;
`;

export const FormTextArea = styled.textarea`
    border-radius:10px;
    border:2px solid #08244B;
    padding:8px 16px;
    min-height: 64px;
    font-size:18px;
    font-family:'Maven Pro', sans-serif;
`;

export const FormAdditionalGroup = styled.div`
    display:flex;
    flex-direction:row;
`;

export const FormFooter = styled.div`
    display:flex;
    gap:16px;
    justify-content:space-between;
`;

export const FormSeparator = styled.hr`
    width:100%;
    height:2px;
    background-color: #08244B;
`;

interface UpdatePostFormProps {
  post: Post;
  onUpdate: (updatedPost: Post) => void;
  onCancel: () => void;
}

const UpdatePostForm: React.FC<UpdatePostFormProps> = ({ post, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [content, setContent] = useState(post.content);

  const handleUpdatePost = () => {
    const updatedPost = { ...post, title, description, content };
    onUpdate(updatedPost);
  };

  return (
    <SavePostForm>
      <h2>Atualizar Post</h2>
      <FormGroup>
        <FormLabel>
          Título
        </FormLabel>
        <FormInput
          placeholder="Digite aqui o título do post. Ex.: “Ligações covalentes, Coordenadas geográficas etc.”"
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="description">
          Descrição
        </FormLabel>
        <FormTextArea
          placeholder="Digite aqui uma breve descrição do seu post para ajudar o leitor a saber o assunto do seu artigo"
          id="description"
          name="description"
          rows={4}
          cols={50}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          Conteúdo
        </FormLabel>
        <FormTextArea
          placeholder="Digite aqui o conteúdo completo do seu artigo"
          id="content"
          name="content"
          rows={25}
          cols={50}
          value={content}
          onChange={(e) => setContent(e.target.value)} />
      </FormGroup>

      <FormFooter>
        <PrimaryButton onClick={onCancel}>
          <FontAwesomeIcon icon={faClose} />
          Cancelar edição
        </PrimaryButton>
        <SecondaryButton onClick={handleUpdatePost}>
          <FontAwesomeIcon icon={faSave} />
          Salvar
        </SecondaryButton>

      </FormFooter>
    </SavePostForm>
  );
};

export default UpdatePostForm;

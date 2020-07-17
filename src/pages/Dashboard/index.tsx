import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logoGitHub.svg';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  //07:33 de aula

  function handleAddRepository(event: FormEvent<HTMLFormElement>): void {
    // adição de um novo repositório
    // Consumir API do Github
    // Salvar novo repositorio no estado
    event.preventDefault();
    console.log(newRepo);
  }

  return (
    <>
      <img src={logo} alt="Logo do GitHub" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />

        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/14594735?s=460&u=7d0186cd7d541c8b2c5ef817294351643527bcd4&v=4"
            alt="Avatar do Repositorio"
          />
          <div>
            <strong> Abilton Dias</strong>
            <p> Projetos de Desenvolvimento</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

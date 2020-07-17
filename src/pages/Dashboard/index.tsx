import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logoGitHub.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo do GitHub" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
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

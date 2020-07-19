import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error} from './styles';
import logo from '../../assets/logoGitHub.svg';
import api from '../../services/api';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [inputError, setError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer: repositories');

    if(storageRepositories){
      return JSON.parse(storageRepositories);
    }else{
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer: repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>): Promise<void> {
    // adição de um novo repositório
    // Consumir API do Github
    // Salvar novo repositorio no estado
    event.preventDefault();

    if(!newRepo){
      setError('Digite o autor/nome do repositorio');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setError('');
    } catch (err) {
      setError('Erro na busca pelo esse repositorio');
    }
  }

  return (
    <>
      <img src={logo} alt="Logo do GitHub" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />

        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error>}

      <Repositories>
        { repositories.map(repository => (
          <a key={repository.full_name} href="teste">
          <img
            src={repository.owner.avatar_url}
            alt="Avatar do Repositorio"
          />
          <div>
            <strong> {repository.full_name}</strong>
            <p> {repository.description}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;

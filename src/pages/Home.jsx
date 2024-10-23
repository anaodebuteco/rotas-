const Home = () => {
  const posts = [
    { id: 1, title: 'Post 1 ', excerpt: 'Resumo sobre carro suv.' },
    { id: 2, title: 'Post 2', excerpt: 'Resumo sobre carro eletricos.' },
    { id: 3, title: 'Post 3', excerpt: 'Importancia da manutenção diaria.' },
  ];

  return (
    <div>
      <h1>Bem-vindo ao Meu Blog</h1>
      <p>Compartilhando ideias e experiências sobre diversos assuntos.</p>

      <h2>Últimos Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/posts/${post.id}`}>Leia mais</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

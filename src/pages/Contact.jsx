const Contact = () => {
    return (
    <div>
        <h1>Contact Me</h1>;
        <h2>Nome:Pedro silveira</h2>
        <h2>matricula:2324291013</h2>
        <h2>Email: pedrohenriquealves2000@yahoo.com </h2>
        <br />
<h3>Envie uma mensagem:</h3>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

  export default Contact;
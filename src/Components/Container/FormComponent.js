function FormComponent(){
    return (
      <section className="d-flex" id="contact">

        <div id="form-row" className="row">
          <div className="col-1">
          </div>
        <div className="col-lg-5 col-sm-12">
          <form className="MailForm" >
        <div className="formulario">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >Dirección de Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuarioe@sumail.com" />
          <div id="emailHelp" className="form-text">Ingrese su mail</div>
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Escriba aqui su mensaje</label>
          <textarea className="form-control" rows="4" id="text"/>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img src="./viaje.jpg" alt="fotoviaje"/>
        <div className="col-1">
        </div>
        </div>
        </div>


      </section>

    )
}
export default FormComponent;

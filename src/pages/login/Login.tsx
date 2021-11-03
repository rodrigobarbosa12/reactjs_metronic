import { useEffect } from 'react';

const Login = () => {
  const setBackgroundImage = () => {
    const body = document.querySelector('body');

    if (!body) {
      return;
    }

    body.style.backgroundImage = 'url(/theme/dist/app/media/img/bg/background-black.png)';
  };

  useEffect(() => {
    setBackgroundImage();
  });

  return (
    <div className="m-grid m-grid--hor m-grid--root m-page">
      <div
        className="m-login m-login--5"
        id="m_login"
        style={{ background: 'transparent' }}
      >
        <div
          className="m-login__wrapper-1 m-portlet-full-height"
          style={{ paddingTop: '7%' }}
        >
          <div className="m-login__wrapper-1-1">
            <div className="m-login__contanier">
              <div className="m-login__content animated fadeInDown">
                <div
                  className="m-portlet m-portlet--tab"
                  style={{ borderRadius: 20 }}
                >
                  <form className="m-form m-form--fit m-form--label-align-right">
                    <div className="m-portlet__body">
                      <div className="form-group m-form__group">
                        <span>
                          <img
                            src="/theme/dist/app/media/img/logos/logo-paguemax-black.png"
                            alt="Logo"
                            style={{ width: '75%' }}
                          />
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'center' }}>
                          <strong className="m--font-metal m--margin-top-15">
                            <h5>Insira seus dados</h5>
                          </strong>
                        </span>
                      </div>
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input"
                          type="text"
                          placeholder="Email"
                          autoComplete="off"
                          required
                          style={{ borderRadius: 7 }}
                        />
                        <input
                          className="form-control m-input m--margin-top-10"
                          type="Password"
                          placeholder="Senha"
                          required
                          style={{ borderRadius: 7 }}
                        />
                        <a
                          href="/login"
                          id="m_login_forget_password"
                          className="m-link m--margin-top-10"
                        >
                          Esqueci minha senha
                        </a>
                      </div>
                      <div className="form-group m-form__group row">
                        <div
                          className="col-12"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            marginBottom: 15,
                          }}
                        >
                          <button
                            type="submit"
                            className="btn btn-success"
                            style={{ width: '40%', height: 50, borderRadius: 10 }}
                          >
                            Login
                          </button>
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: '40%', height: 50, borderRadius: 10 }}
                          >
                            Criar uma conta
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

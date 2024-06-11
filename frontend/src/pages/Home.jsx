import { Carrosel } from "../components/Carrosel";

export function Home() {
  return (
    <>
      <main>
        <Carrosel />
        <div>
          <div class="container overflow-hidden">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <div class="card" alt="card-carteira">
                    <img src="src/img/carteira.webp" alt="" />
                    <div class="card-body">
                      <h5 class="card-title">Carteira</h5>
                      <p class="card-text">Deposite seu dinheiro para começar a multiplicá-lo</p>
                      <a href="/Deposito" class="btn btn-primary">Ir para carteira</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <div class="card" alt="card-apostas">
                    <img src="src/img/005.webp" alt="" />
                    <div class="card-body">
                      <h5 class="card-title">Jogo</h5>
                      <p class="card-text">Deposite seu dinheiro para começar a multiplicá-lo</p>
                      <a href="/Jogo" class="btn btn-primary">Ir para jogo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

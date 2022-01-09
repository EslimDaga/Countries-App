import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div class="card card-bordered">
              <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="pictur"/>
              </figure>
              <div class="card-body">
                <h2 class="card-title">Top image
                  <div class="badge mx-2 badge-secondary">NEW</div>
                </h2>
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                <div class="justify-end card-actions">
                  <button class="btn btn-secondary">More info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

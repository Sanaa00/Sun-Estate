function layout() {
  return (
    <>
      {' '}
      <div className="layout">
        <div className="navbar">
          {' '}
          <Navbar />
        </div>
        <div className="content">
          {' '}
          <Home />
        </div>
      </div>
      ;
    </>
  );
}

export default layout;

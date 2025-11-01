export default function Gallery() {
  return (
    <div className="container py-5 text-center">
      <h2>University Gallery</h2>
      <p className="text-muted mt-3">A glimpse of life at the University of Allahabad.</p>
      <div className="row mt-4">
        <div className="col-md-4"><div className="bg-light p-5 border rounded">📷 Image 1</div></div>
        <div className="col-md-4"><div className="bg-light p-5 border rounded">📷 Image 2</div></div>
        <div className="col-md-4"><div className="bg-light p-5 border rounded">📷 Image 3</div></div>
      </div>
    </div>
  );
}

import { useParams } from 'react-router-dom'

function ProductScreen() {
    const params = useParams();
    const { slug } = params;
  return (
    <section>
        <div>
            <h2>{slug}</h2>
        </div>
    </section>
  );
}

export default ProductScreen
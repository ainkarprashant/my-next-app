import db from "@/config/db";

const page = async () => {
    
  const [rows] = await db.execute("select * from products");
  console.log('rows from db', rows);

  return (
    <div style={{ padding: '2rem' , color: '#0b1220' }}>
      <h1>Static Page</h1>
      <p>This is a static page.</p>
      <h2>Products from Database:</h2>
      <ul>
        {Array.isArray(rows) && rows.length > 0 ? (
          rows.map((product, i) => (
            <li style={{ color: '#0b1220' }} key={product.id ?? i}>
              {product.name} - ${product.value} - {product.description}
            </li>
          ))
        ) : (
          <li style={{ color: '#64748b' }}>No products found.</li>
        )}
      </ul>
    </div>
  );
};

export default page;

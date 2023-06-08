async function Skeet({id}) {
  // Skeet are static unless programmatically revalidated
  let skeet = await fetch(`https://.../${id}`).then(res => res.json());
  return (
    <div>
      <p>{skeet.author}</p>
      <p>{skeet.content}</p>
    </div>
  );
}


import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

export default GiArtilleryShell = (params) => {
  console.log(params);
  const pathname = usePathname();
  console.log(pathname);
  const fetchedId = pathname.slice(-1);
  console.log(fetchedId);
  const product = DoorSealProductsPanel.find(
    (item) => item.id === parseInt(fetchedId)
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Link
        href="/glass-railings"
        className="text-blue-600 roboto-light hover:underline mb-4 inline-block"
      >
        &larr; Back to All Windows
      </Link>
    </>
  );
};

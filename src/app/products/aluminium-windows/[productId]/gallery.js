import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

export default GiArtilleryShell = (params) => {
  // console.log(params);
  const pathname = usePathname();
  const fetchedId = pathname.slice(-1);
  // console.log(fetchedId);
  const product = AluminiumProductsPanel.find(
    (item) => item.id === parseInt(fetchedId)
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Link
        href="/aluminium-windows"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to All Windows
      </Link>
    </>
  );
};

import MobileNav from "@/components/MobileNav";
import SiderBar from "@/components/SiderBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = {
        $id: '',
        email: '',
        userId: '',
        dwollaCustomerUrl: '',
        dwollaCustomerId: '',
        firstName: 'Purna',
        lastName: 'Sai',
        name: '',
        address1: '',
        city: '',
        state: '',
        postalCode: '',
        dateOfBirth: '',
        ssn: '',
    }
  return (
    <main className="flex h-screen w-full font-inter">
        <SiderBar user={loggedIn}/>
        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image  src={'/icons/logo.svg'} width={30} height={30} alt="logo" />
                <div className="">
                    <MobileNav user={loggedIn}/>
                </div>
            </div>
        {children}
        </div>
    </main>
  );
}

import LoginForm from "@/app/components/home/LoginForm";

export default function Home() {

  return (
      <main>
        <div className={'w-full h-screen'}>
          <div className={'grid grid-cols-12'}>
            <div className={'col-span-4 col-start-5'}>
              <div className={'border border-gray mt-12 shadow-sm rounded-md px-10 py-12'}>
                <div className={'text-center mb-10'}>
                  <p className={'text-xl'}>Covenants</p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

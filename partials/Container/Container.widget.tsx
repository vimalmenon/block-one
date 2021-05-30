import { ContainerProps } from './Container'
import { Header, Footer } from '../'

export const Container: React.FC<ContainerProps> = ({ children, customer }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex flex-col h-full">
        <Header customer={customer} />
        <section className="flex flex-grow justify-center">
          <div className="flex container">{children}</div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

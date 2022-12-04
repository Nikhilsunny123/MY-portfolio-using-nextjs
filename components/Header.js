

function Header() {
  return (
    <header className="flex flex-col sm:flex-row p-8   h-auto bg-slate-900">
    
            <ul className="flex flex-row-reverse gap-20 ">
                <li className="text-lg  cursor-pointer hover:text-green-600">Home </li>
                <li className="cursor-pointer hover:text-green-600">Projects </li>
                <li className="cursor-pointer hover:text-green-600">Contact </li>
                <li className="cursor-pointer hover:text-green-600">Resume </li>
            </ul>
        

    </header>
   
  )
}

export default Header
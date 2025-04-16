export default function Button ({children, ...props}){
    return (
        <button 
            className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
            {...props}>
            {children}
        </button>
    )
}
/*
When we put ...props, it will allow me to add other props, like onClick, which i will do in NoProjectSelected
and ProjectSidebar.jsx
*/
/* eslint-disable react/prop-types */
export default function Wrapper({ children }){
    return (
        <>
            <div
                className="
                    lg:px-32 max-lg:px-4
                    min-h-screen
                    bg-white
                    flex-wrapper
                    margin-header
                "
            >
                {children}
            </div>
        </>
    )
}
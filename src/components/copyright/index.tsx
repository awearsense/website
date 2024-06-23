const Copyright = () =>{
    return(
        <div className="container md:max-w-screen-2xl mx-auto py-4 flex text-xs text-gray-500 justify-between ">
            <div className="flex flex-col md:flex-row gap-2 justify-between w-full">
                <div className="tracking-wide flex gap-2 flex-col md:flex-row">
                    <div>
                        <span>© 2022 Indic Origins Private Limited dba</span> &nbsp;
                        <span className="text-slate-900 font-medium tracking-wider">awearsense</span>
                    </div>
                    <div>All Rights Reserved.</div>
                </div>
                <div className="flex gap-2 tracking-wide">
                    <a href="#" target="_blank">Terms of Service</a> 
                    <a href="#" target="_blank">Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Copyright
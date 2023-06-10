import Image from 'next/image'

 function Home(){
    return(
        <div>
            <center>
                <Image src="/images/cyber-developer.gif" alt="Person in city style cyberpunk" width={1080} height={720} />
            </center>
        </div>
    )
}  

export default Home;
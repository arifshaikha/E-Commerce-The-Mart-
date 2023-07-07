import { Carousel } from 'antd';
const contentStyle = {
    height: '300px',
    width: '100vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    objectfit: 'cover',
    overflow: 'hidden'

};
const Sliderafternavbar = () => {
    return (
        <Carousel autoplay>
            <div>
                <img style={contentStyle}
                    src="./assest/slider1.jpg" />
            </div>
            <div>
                <img style={contentStyle}
                    src="https://www.reliancedigital.in/medias/Realme-Smartphones-CLP-Banner-05-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MjM5NHxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaGNhLzk5NDUxMDY4MDg4NjIuanBnfDI3ZDI3NmRlYzE1YzU2NmM5N2EwMWM5OWE4MDliNTlhMDE3ZDgwMzk0NjJhY2ZkNjMzMDFlNjNiNDM4ZTUyMGQ" />
            </div>
            <div>
                <img style={contentStyle}
                    src="https://www.reliancedigital.in/medias/Best-Deals-on-OnePlus-Smartphones-CLP-Banner-13-04-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDg5ODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDExL2gxYS85OTgyNzU1MjA5MjQ2LmpwZ3w5YjU2OWRkMGFlNTRiZmU2OTRhODUxNDQ2ZGVmMmQ0MDAxYzk5NTdkOWRmZjczZDA1OGRmYzY3ZjkwY2NmNzMz" />
               
            </div>
            <div>
                <img style={contentStyle} 
                src="https://www.reliancedigital.in/medias/Redmi-Smartphones-CLP-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NjM2NXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDBlLzk5NDA4NDM3NTc1OTguanBnfDgyNWI4ZWIxNzE4M2UxNjVhOWY0M2ZlMDJmZDkwNzMyZDY3NzJmMjFjZGYxNTAyYzFkYTk2MGQ2NDRkZDg2YWU"/>
               
            </div>
        </Carousel>
    )
}
export default Sliderafternavbar;
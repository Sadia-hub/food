import styles from "../Product.module.css"
const food = [{
    name:"briani",
    url:"https://media.istockphoto.com/photos/authentic-chicken-biryani-with-onion-raita-picture-id516401834?k=20&m=516401834&s=612x612&w=0&h=rNq_YZlj0dya1fvImOvq4NuQiRVOg5WeM6EOMlVaaPg=",
    price:900
},{
    name:"Chicken Karhai",
    url:"https://geekrobocook.com/wp-content/uploads/2021/05/Spicy-Chicken-karahi.jpg",
    price:800
},{
    name:"BBQ PLatter",
    url:"https://img-global.cpcdn.com/recipes/4ea9b4f8e7190e95/680x482cq70/barbq-platter-recipe-main-photo.jpg",
    price:200
},
{
    name:"Fish",
    url:"https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg",
    price:1000
},
{
    name:"Pasta",
    url:"https://static.onecms.io/wp-content/uploads/sites/9/2020/09/17/cream-tomato-rigatoni-FT-RECIPE1020.jpg",
    price:1100
},
{
    name:"Jollof Rice",
    url:"https://ingmar.app/blog/wp-content/uploads/2015/05/Nigeria-Jollof-rice.jpg",
    price:1200
},
{
    name:"Abacha",
    url:"https://guccilounge.net/wp/wp-content/uploads/2020/11/abacha1-450x450.jpg",
    price:2200
},
{
    name:"Rice Kheer",
    url:"https://c.ndtvimg.com/2018-10/6n7i40g8_sharad-purnima-2018-kheer-recipe-and-benefits_625x300_23_October_18.jpg",
    price:500
},
{
    name:"Rice Pudding",
    url:"https://ticklethosetastebuds.com/wp-content/uploads/2020/05/Badaam-Kheer-1.jpg",
    price:1200
},
{
    name:"Butternut Soup",
    url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEBAVFRAXEA8VFRcWEBUWFRUVFRUWFhcVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAIBAgQEBAQFAQYHAAAAAAABAgMRBAUhMRJBUWEGInGBEzKRoSNCscHw0RVDUoLh8RQWM2KSssL/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADURAAIBAgMECQMCBwEAAAAAAAABAgMRBCExBRITQVFhcYGRobHh8CLB0ULxFBUjMlJykgb/2gAMAwEAAhEDEQA/APt4WAAAAAAAAAAAAYCbAaHIQAAAmAwAQAAAAAAAAADAAAAQAAAAAAAAAAAAAAgYxOy1e24DQHnM8z/hbo0X5teKaekey6soz7xEr/DpPy6KU09deUf6njcXNQWmr13e5BstjHpL6k43bb45N3317XIuq0uLkY1Oy47205WV35t/ovqZsXi3JrWyvsv0K7lqRunik7pt7mHH/CcbacXrzK8Lgq1efBQTlO6+Xlru3svc9/4c8DU6VqmJtUq22/JHn77iUb6EnNR1Pm//ACv8T8RUG+LW/Be/2EfeI2Sso6crAW7nWV/xHUTASBsmZhgRHcAGRuDGA8guAmCEx8hjENDEACI1G7XTSem+2+v2ARMjOolu0cfNc8hSWsry1tb3e3PQ8bmnidyulUbbeijy7XM9bE06K+pmijhp1f7Ue1zDPYU4tpxbT14pcKtzd0mc2t4qVvLB2u1rpona+v1PAVszqz28q7b/AFMc6M5O7bfqzmVNr5/SvE6MNmL9TPZ4zxlNVFadNU7PiWrm27Ws07JddBR8bvnOH1PF/wBnNieWMz/zWfSi/wDl9I97S8b6paO99U9Lrkzr4XxVTl811fqfKXl8kSjGpDZte5bHa0r5pPyKpbNg9GfbMJjoTS86bsrva/fsaVJWuno7WfrsfGcFnFWm1q/52PWZL4u2jUd1fpt205aHQo7QpVHZuz6/zoYa2BqU81mj3gGbDY6E48SkrW3urGk3GIAAAADxfjnNJxnGhCVkocc0vzcTain2Vm7d0epzLHRowc5b2dl1t+x81xcpTnKtUfnm3y1tyS6aK1iE2WU1mSw076y1V7/7mWuoyle/LmiE6z2S9jZl2VVsQ7U42jdXk9Ir1fXtuVbxo3LanOxFGKh1lySTbOvkHgmrW8+JvSpP8n95Jf8AyvXU9lkvh6lh7Stx1ec5L/1XL9TtE1F8yuVTlHxMuW5dSw8FTo01CPbd9292zYRHctKGMAABEUDBDABAhpAAAmDREkBKwrAgGgBgFxEJytyutU+i0vqBEnOaSuzyXibxCoeWL17W+/6EvE2eKKcIPXoeHjSlOXFNt6/yxydobRVH6If3enudPBYLifXPT1K8VialZ6t26X/UnQy/qdCjhbGynRPK1cU5O9ztxioqyMNLBLoXRwxtVOxJRMkqrYbxjWGCWHN3CV1JxgnOfyxjKT15JXsEZNySIudlcxPDlc8KuhhoeIp8XE6acG0uBLRK60TerlZ7+h2o1acv+nNTTSem/uuRrnQqQV1n2GWjj6VW9nbtOVVwCfIxV8A1quR6V0ymrQKoYho23RhyrOqlF9VdXT2tzPouU5lGvGMlKzW6TVndWs9L/ofOMRhieVZhUoVE43avqlz9Dv7P2nutQqZx819zm4zAqa3oan1q5kx+YQpLzSSfJN8zjY3xDGEVww/Flwp7J9k+fNnIwmWV8XU46jtG9m+S6pdX2Xu+R6OU7ZI48aV1d5IzZlj6mJq2jFt3so77dlu+dltc7OUeFkvPX+Z6tXUn7vZe1/U7mXZbSoK0I62Scn80vV9Oy0NpHcvnIk6lsoePP2ObPIsO96V/80v6m+lSjFKMYpRWySsl7EwJpJaEHJvVgAANEREhAMTYAAAIAEAAO4DABiABCGSABDEFzkZ/mCpw3s+W2tt0dSpKybPCeIcW51OG+iMWPxX8NRc+ei7TThKHGqJcuZx6rdSXFLc0UaI6NI1KHI8JVquTu2ekyirIUYFygQdJNcMldabq97dS2MblGpByG4pdxCATd9CKBnMzunKdJwi95RuuvRN8kdMrkidKbhJSQp01Ui4PmcbAZY4RtZOq22mktG1ZK/sjDkuVV413LEQSVrq1vmvdWty7HSzHPYYaa1Upc4381pbNIx5Zn9StWUauz34YO0eivt+51UqnClJrN593Vmc2pKhxadNfpdrWvyWvzpR6K99ROJZSq0kuKpNLXTzWuU5pntOkuGnFTm1paacV6uN/pvoUYfZtWut6PPqb8eg3VMRGDsyurT62S6sz4SpHiaprXnN/lXPh6Lv9Dn1lUqPjry4Yy1jDm+0Y9PXbuScHa20dbRWiXd/4mdqnTw+z43k96fzTo7Xn0dBT/VxOWkfmv4NzxsONRhK7b1n678Kf687a32PoGTwlGnwtpx04bb2st/e58njFxkmup9P8OYr4lFO/K30N+zcXxnJS117vYybQocNRtodgAA6pzhDEMAuAAAWBAMASBCbCwDAYiAxDAYhgACABkREkSISehIhJ/uwA52eS/Amm2k4SV03GVmuTWqfc8OleV3uer8UVvIo9TzUIHk9vV71lTXJebO5synak5PmyVOJckRhEmecbNrdwABwg2/0/1CxG4gNlPCdWWukktvc0wwlSSu8ip1Yoy0sLKRVWptOxizbMoyl8JVeFJ+ZKXC5O+3F+vsbsDTjwrWLuk9HdfXmXzwsdz6cn0vn3FMMVeo42vY4Wa4OTmpUcNGdRq3G5pNO1uabS227leGwOMg74h0XHXhjCDdv88rNM9hG3QmpI3QqSVLhuS0tpy6M/UplQpcXiON3e+vM+UZ9XqRqSjUWrstbeVNaKF/437W3ZTT4KDxEk5yUlCmrLoub06/Q9l4gyehXV5xXGtnz9DhUcmUZL/CvljyXfXmb1tKlRpcPmlZJae3Y/MnDDynU3+T8SVBSk+Ob4pvdv9F0RoVI006Fi3gPN1KzlLebOorJWRzalA9N4QxDTcDkzpmzIp8NZLrKyN+ycQ44qHXl4+5lxsFOi+rM9ygFF6Ike35nnEAAMEJiAaQ0hhcSRJIEhgIAAAAqAYgABiAAQxAMTJIRVvL2X7lkmUxfmfov3AGed8UzfHGNtLN3OPBHY8Tr8Rehyoo8FteV8ZU7V6I9DhMqERpEkgSLaUbs5iTbsi1uxKjQv6GunTS2I8VkKU3yOnTjClorszSbkWRqJ7X58rFWIpqUXGTtdW0epRisZGEbzklyV7u/skYsNmrbcasfh6S8zdrW6t8y1T387X9PUrcoxkk3mzBmOUKTVRUk57SbjpPu11725HRy7BSjG0vLbZXureu5dDE3S4JJx5NbMthUu+j9bfYo4kZR3JJvln+f2HHDqM+JF+/z1F8RrS5FyLJU431ml6yRQ2YqlOcbb2hpjZ6BJEXAmBUmTuQsKxKwNBcdyuSLcvX4kbdSLLMCvxI/zkasI7V4f7R9RVH9Eux+h7RfKt947evfkWEFsixH0dnmUA0gGNCYDQkSAQgAAAAAAArAAABiGIRJDIyGRbGxikUU35/8AKv3LZsyTlacX6r9/6iA5XiSD4otq269dtf50OQj03iKjempdP3PNpHhNt09zGSfTZ+VvsdvBT3qK6hjixDRyEaSyVT6nOr5xTpycZJ3Xvy2Rua3/AKlTSvfgpt9XFN9NzZQcN+9V5dlymrGbj/T1OJnGZ8dNTpx/Ok+JWsrNvXa+31ORSxbnK1ST0ScUk2mubvLf12R7DENODg4Rs1tur9Umc3/h76NafzubI16UFaOflzMVfBVqsk1bRJ6fNCOU1XdQVNxpvXilPiu+yXX6FXiHN3RkoQlFv83Vdu2ljo0aSirLRdkkcPP8A3+JB2ldNpxTTtz1/mhFVaVateSy8CyWHr0sPuwld/bqvbw6CunNKUfNLiVnrfre2nI9RUx+HTUOK83FbJta+p5bi+JBOUPxUnor/Db0teelvTVaEMPL4balWiqstW3bXslfRbGrgKWqT7l5dBzYYmeHunrl8Z66Mla6d1/ORJM85hsRJSUnibLpFSs+0Vz9Wz0EJXV9depzMVhOFmtPnzQ62Exka6t+pFohgYjWQZtyenetHtqYmdnw1RvKUuiVjo7Lp8TFU1138M/sVYmW7Sk+o78uhOJCT1JRPoLOAiYIRJIBPIYAgGRAYgAAAAACArldWVlcKMrq4rk7ZFkl3ATHcQCZEbZFjYFc2Y8VtfmndexqmzLWYmySNUoqrSceq/2PKzotJ9Ve538or2bpv29GUZrheGpxr5Z7+pwtuYRVYxq9GT7Ho+5+TZqwVTdbg+04Qx1I2dhHi2msmdgajdb6kGiRFkr3BEZIr4CwUkMmmZ8VWUIuVm7ckcKtmM95wSV/lcXfVc3z+iO+46a6nEzZO1klZdtk+73d19u50sHGLv8A5HL2nKrGKcW93n2mjBZ/KfknBTg3a+kZL6aN+yM+NwtSUW4Ly843dpbXcektdiGTUXJuUlZpx9La6W5+p240S2ti3Cdnnb5rmyFDCPEUE6j55PXLR/L8lyyOJlWU2fGpSjrqrq33vr+vM9HAIwJpHNr15VXdnQoUIUIbkSQwCxnLBHq8pw3BSV1ruziZRguOor/KrN/sj0tedlZHq/8AzuEcd7ES7F9345dzOZj6t7U13/YrpzT8yd09rdC5FEdCVz0qZz7FsNWXFVFaFpJaEHqAAIYhhcQAAAAABRw63JIGBEmNiAQIAEyRBjApmZqyNUzLVRFkkzm1qjjJTjuvuuh3E41qVt7r6c0ziYlFOX4z4VRX+W9/tb2ItKScJZp5A1zWqHi8M1eL+ZfdGBRseuxWGjWipRfmWz/Znn8ThXdq1pLdHjdp7MlRndaPR9PV/sl/0s1zOthsSpKz+exiIMm1bQRwzYQAk0RJXJXItFVTDqWkloXgNNrND6imnRS0Ssi1IkFgcr5iBImIdiDEBfh6Dk1pe70XUlQwrb19l1PRYDBqmuKXzW/8V0Xc6+ztmTxE88l88+hd7y1x4jEqnHLUuwWHVOFue8n1ZndTid1tyFjcTd8K9yqmz2qjGEVCGSWRyVdvelqaosbkVthF3a9USA6EVoMEBaUgAAAAAAAAAXAVx2KQGAEhDEMAAhIkJiAqkZ6qL5FU0A0c7ExOVi4HarxOZiqZFk72I5RnbptQltf7Hp5whWimt7aNbr/Q8BjKL3Q8uzydF2k3w9f5+pGSjKO7NXTDdad46np8bgGvmXo/5sc6phWjv5dnVKrHdarrdNevMvq5fCWsXb7r6HDxmw41Pqpv8/h9/maqWNccpHk3Ei0egrZY+l/QxTwHZr+dzg1tlV6b/de3mboYqEjlWHY6DwPcSwPczvBV/wDHzLONExWCx0YYD1f87Guhlr5Rt3asX0tlV6j/AHfoVyxMInIp4eT5G/B5e29Fd/ob8VTpUKcq2IqKNKKTlJ3SSvbXnu0bKmMp046NWtdW2O7hNhKD3qnz7LtZiq42+UR4bCRpq71lbf8AZHPxeMk7xU1fiunFWtG90ne93bRswYnMOOT+GrcTXE7vWysnbrb9h0YHciowjuQVl88TJZt70tTTSiaYsqpxZckSSC5NstwcfN2RSjoUIWiSiiMnZFoWARYVAAAAAK5ByJCuSSHYQXEGQrsrJCBiJDEK4MAGQZIrle66a3AAsVzRc2VyAZkqxMNeB05oyVqavfmRJHAxFJ63XPQ4+Mw97nqa9I5eJw4DueXjUnSf4cml05fQ7uVeLZxdpt8npql7br7mPGYU5k6PC2+xFZaEnZ6n0nA+KKc1um+z1+m50qebUpc7eqPj3C3L/str1b6ehrpVZRSUJyjrolJjVRkeEj62sTSfOP0Qo16Vrpx+iPmKx9Vf3j+zG8dVe839F/QN5dAuG+k+l/2lTSWtm+Wm/TQw43xDSp7yV+jer9EfPJ4mpZRUpWtb5tF7EKcbg6jGqSPVZh4l+IuGMbq2qa8r9VzMUatSo7zd105GHCYY7eGokc3qSyWhZhqZ0qUdCqjS7G2nTJJEWOMSyKBQJOIxXHBXaXc6KRgw8fMbyUSuQAAEiIBcGRuAEZxFcncg4kGTQXGQuBHeGMiAE0AwuAAIBAAAFiMkIAAhJGadgARNGerTMdaiAAJHMxOHOZiMGICJMw1MJYpdN3Wiste9+wAKwE4sk2+W4ARJ2LKVBs34bBgA2iNzq4fDWOjh6QASIs20omiKABoiy0hcAADRhY7s0gBNFctQAAGITIyABMkgQ2IBMZTxAAFNy2x//9k=",
    price:5000
},
];
const Product = ()=>{
    return (<>
        <div className={styles.container}>
             {
                 food.map((item)=>{
                     return <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className={styles.content}>
                                    <h2>{item.name}<br/>
                                    <span>{`Price ${item.price}`}</span></h2>
                                </div>
                        </div>
                 })
             } 
              
              
             
        </div>
    
        
        </>);
}

export default Product;
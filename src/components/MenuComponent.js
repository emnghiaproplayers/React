import React,{ Component } from "react";
import { Media } from "reactstrap";
//Media là một thành UI dùng để hiển thị các phần tử đa phương tiện(hình ảnh,video,âm thanh
class Menu extends Component {
    constructor(props) { //khởi tạo component Menu và nhận tham số 'props', props này sẽ chứa các thuộc tính 
                        // được đề cập phía dưới như id, name, bla bla,...
        super(props);
        this.state = { //dùng câu lệnh này để set trạng thái ban đầu của components menu, trạng thái state này
                        //bao gồm 1 thuộc tính dishes chứa những thuộc tính của các món ăn như id, name,...
            dishes: [
                {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        };
    }
    render() { //render là một method dùng để tạo ra giao diện bên trong này
        const menu = this.state.dishes.map((dish) => { //biến menu được khai báo,sử dụng map để duyệt qua mảng dishes
            return (      //trả về ds JSX             //dish này là biến nặc danh, ưng đặt j thì đặt, ở dưới chỉ cần truy vấn
              <div key={dish.id} className="col-12 mt-5">   
                <Media tag="li"> 
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });
//tag li để tạo ra phần tử li trong danh sách Media, media left middle định nghĩa phần tử con trong thẻ này sẽ nằm
// bên trái thẻ media, còn middle không nhận, mục đích chính là đê căn chỉnh cho hợp lý
// media object là một phần tử để hiển thị hình ảnh của món ăn
        return ( 
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;


// rated dimensions of the persona (ydimension, xdimension, fdimension, x_traits, y_pointers) 

struct Persona {
    active: bool,
    name: String,
    email: String,
    sign_in_count: u64,
}

fn main() {
  
  let user_template = Persona {
  	active: true,
    name: String::from("someusername123"),
    email: String::from("someone@example.com"),
    sign_in_count: 1,
    
  };

  let me = Persona {
   	name: String::from("Duong BaTien"),
    email: String::from("duong.batien@gmail.com"),
    ..user_template
  };
   
  println!("My name is {}", me.name);
  println!("My new email is {}", me.email);
  println!("Am I active: {}", me.active);
  println!("My sign_in_count {}", me.sign_in_count);
  
}



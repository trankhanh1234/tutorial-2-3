Khánh Trần Recap Reactjs tuần 1.

Session 1 +2:- Tổng quan về react.

- Reactjs là 1 thư viện js dùng để xây dựng UI, được ra mắt năm 2013 bởi facebook.
- jsx là cú pháp mở rộng thường được sử dụng trong reactj, cho phép chúng ra code html kết hợp với js.
- component trong react có tính kế thừa, có thể sử dụng lại được nhiều nơi với cùng tính năng.
- Reactjs sử dụng virtual DOM.
- state là biến để ghi trong reactjs, nó có thể chạy bất đồng bộ, có thể sửa đổi và sẽ render lại component mỗi khi state được thay đổi.
- props dùng để truyền dữ liệu từ cha xuống con, và không thể thay đổi.
- lifycircle trong react có 3 cái chính:

  - mouting: nó chạy khi component lần đầu được khởi tạo và chỉ chạy 1 lần duy nhất
  - updation: chạy khi conponent được render lại.
  - unmount : khi component được remove khỏi cây dom. nơi đây thường đẻ dọn dẹp dom không cần thiết.

- router trong react : là 1 thư viện của reactjs, cho phép chúng ta điều hướng cũng như là SPA trong Reactjs

- tìm hiểu 1 số stucture của react có thể chia theo router, feature, hoặc 1 số cấu trúc quản lý component khác như Atomic.
- Nextjs là 1 bản nâng cao của reactjs cho phép chúng ta chạy SSR. nhằm SEO web tốt hơn,...

session 2: Tìm hiểu sâu hơn về React

- React Hook(useState, useEffect, useRef,....).
  - tại đây contructors được thay thế bằng useState, useState nhận vào 2 tham số là [state,setState], state dùng để đọc dữ liệu và setState dùng để cập nhập lại dữ liệu.
  - useEffect thay thế các lifycircle khác của class component như componentDitmount và componentDidUpdate.
  - ngoài ra còn 1 số api khác được cung cấp trong mục Hook này như useRef, useContent, useReduce....

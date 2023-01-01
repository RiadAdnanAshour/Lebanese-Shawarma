
// تعبئة الجدول الخاص بالطلبات عند النقر على زر "إضافة"
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', addToOrderTable);
});

function addToOrderTable(e) {
  // الحصول على السعر واسم المنتج من العناصر الأطفال للعنصر الذي نقر عليه
  let price = e.target.parentElement.children[0].childNodes[1].textContent;
  let productName = e.target.parentElement.children[0].childNodes[0].textContent;

  // الحصول على الكمية من العنصر المحدد في القائمة المنسدلة
  let select = e.target.parentElement.children[6];
  let quantity = select.options[select.selectedIndex].value;

  let total = price * quantity;

  // إذا لم يتم تحديد الكمية، يتم إظهار رسالة تحذيرية وتوقف العملية
  if (!quantity) {
    alert('الرجاء اختيار الكمية');
    return;
  }
  //JavaScript Object Notation  JSON
  // جلب المنتجات المخزنة في المحل المؤقت (Local Storage)
  const products = JSON.parse(window.localStorage.getItem('products')) ?? [];

  // إضافة المنتج الجديد للمصفوفة الخاصة بالمنتجات
  products.push({ productName, price, quantity, total });

  // تخزين المصفوفة الجديدة في المحل المؤقت (Local Storage)
  window.localStorage.setItem('products', JSON.stringify(products));


}


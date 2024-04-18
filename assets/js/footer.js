const footer = document.querySelector("#footer");

if (footer) {
  footer.outerHTML = `
  <footer id="footer" class="footer py-4 fw-medium bg-blue text-white text-14">
		<div class="container">
			<!-- Footer Content -->
			<div class="row">
				<div class="col col-12 col-xl-4">
					
					<div class="mb-4">
						Bài tập lớn môn hệ thống công nghệ web IUH 2024, Đề tài: Website bán nón bảo hiểm . 
						Thành viên thực hiện:
						<ul>
							<li>Lâm Nhựt Khang 22679411</li>
						</ul>  
					</div>

					<!-- Footer Email -->
					<div class="mb-2">
						<label for="footer_email">ĐĂNG KÝ NHẬN THÔNG TIN</label>
					</div>
					<div>
						<form action="" class="input-group">
							<input class="footer__mail-input form-control form-control-lg" type="email" name="footer_email"
								id="footer_email" placeholder="Nhập email đăng ký của bạn" />
							<button class="footer__mail-btn btn text-main bg-white px-4">
								Đăng ký
							</button>
						</form>
					</div>

					<!-- Footer Social -->
					<div>
						<ul class="footer__social-list mt-4 p-0">
							
						</ul>
					</div>
				</div>
				<div class="col col-12 col-md-4 col-xl-2">
					<h6 data-bs-toggle="collapse" data-bs-target="#footer__col-1">
						VỀ BHK
					</h6>
					<ul class="footer__list collapse show" id="footer__col-1">
						<li class="footer__item">
							<a class="footer__link" href="">Giới thiệu</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Liên hệ</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Tuyển dụng</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Tin tức</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Hệ thống cửa hàng</a>
						</li>
					</ul>
				</div>
				<div class="col col-12 col-md-4 col-xl-3">
					<h6 data-bs-toggle="collapse" data-bs-target="#footer__col-2">
						HỖ TRỢ KHÁCH HÀNG
					</h6>
					<ul class="footer__list collapse show" id="footer__col-2">
						<li class="footer__item">
							<a class="footer__link" href="">Hướng dẫn chọn size</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Chính sách khách hàng thân thiết</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Chính sách đổi/trả</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Chính sách bảo mật</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">Thanh toán, giao nhận</a>
						</li>
					</ul>
				</div>
				<div class="col col-12 col-md-4 col-xl-3">
					<h6 data-bs-toggle="collapse" data-bs-target="#footer__col-3">
						CÔNG TY CP NÓN BẢO HIỂM BHK
					</h6>
					<ul class="footer__list collapse show" id="footer__col-3">
						<li class="footer__item">
							<address class="fw-normal">
								<span class=""><i class="fa-solid fa-location-dot"></i></span>
								Công ty cổ phần nón bảo hiểm BHK
								<br />
								Mã số thuế: 0905406949
								<br />
								Địa chỉ: Bình Thạnh - Hồ Chí Minh
							</address>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="">
								<span class=""><i class="fa-solid fa-shop"></i></span>
								Tìm cửa hàng gần bạn nhất
							</a>
						</li>
						<li class="footer__item">
							<a href="" class="footer__link">
								<span class=""><i class="fa-solid fa-phone"></i></span>
								Liên hệ đặt hàng: 034 395 490</a>
							<a href="" class="footer__link">Thắc mắc đơn hàng:  034 395 490</a>
							<a href="" class="footer__link">Góp ý khiếu nại: 1900 3189</a>
						</li>
						<li class="footer__item">
							<a class="footer__link" href="mailto:chamsockhachhang@BHK.vn">
								<span class=""><i class="fa-solid fa-envelope"></i></span>
								Email: chamsockhachhang@BHK.vn</a>
						</li>
					</ul>
					<div>
						<a
							href="https://www.dmca.com/Protection/Status.aspx?ID=d3a2c2c5-a581-451b-b7ff-ff08fee58d6a&refurl=https://yody.vn/flash-sale"><img
								src="../img/shared/footer/logo_bct.png" alt="Logo bộ công thương" /></a>
						
					</div>
				</div>
			</div>
			<hr />
			<!-- Copyright -->
			<div class="text-center text-14">
				<span>@ Bản quyền thuộc về
					<a href="../page/home.html" class="text-main text-decoration-none">BHK.vn</a>
					All right reserved</span>
			</div>
		</div>
	</footer>`;
}

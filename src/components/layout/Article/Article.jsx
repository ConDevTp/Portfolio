import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import img from "../../../assets/img/Article/1.jpg";
import img2 from "../../../assets/img/Article/2.jpg";
import img3 from "../../../assets/img/Article/3.jpg";

const Article = () => {
  return (
    <section className="article-bg">
      <Content>
        <div className="article-container" id="articles">
          <SectionTitle title="آخرین مقالات" />
          <div className="article-content mt-5">
            <a href="https://www.instagram.com/p/DQeSpQEEdoB/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==">
              <div className="article-item">
                <img src={img} alt="Article" />
                <h3>نقشه ی راه فرانت‌اند</h3>
                <p>
                  اگه تازه می‌خوای وارد دنیای فرانت‌اند بشی، این نقشه راه مثل یه
                  راهنمای قدم‌به‌قدم می‌مونه که می‌تونه مسیرت رو روشن کنه و بهت
                  نشون بده از کجا شروع کنی و به کجا برسی.{" "}
                </p>
              </div>
            </a>
            <a href="https://www.instagram.com/p/DQhFCeDjBGL/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==">
              <div className="article-item">
                <img src={img2} alt="Article" />
                <h3>جعبه ابزار فرانت‌اند</h3>
                <p>
                  این جعبه ابزار، مجموعه‌ای از مهم‌ترین ابزارها و تکنیک‌هاست که
                  هر فرانت‌اند کاری باید بلد باشه تا پروژه‌هاش راحت‌تر، سریع‌تر،
                  حرفه‌ای‌تر و خلاقانه‌تر پیش برن و بهترین نتیجه رو بگیره.{" "}
                </p>
              </div>
            </a>
            <a href="https://www.instagram.com/p/DQrUojajHrY/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==">
              <div className="article-item">
                <img src={img3} alt="Article" />
                <h3>۵ اشتباه رایج در CSS</h3>
                <p>
                  این ۵ اشتباه رایج در CSS، نکاتی هستن که خیلی از فرانت‌اند
                  کارها مرتکبش می‌شن و شناختشون کمک می‌کنه کدهای تمیزتر، سریع‌تر
                  و حرفه‌ای‌تر بنویسی و از دردسرهای بعدی جلوگیری کنی.{" "}
                </p>
              </div>
            </a>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Article;

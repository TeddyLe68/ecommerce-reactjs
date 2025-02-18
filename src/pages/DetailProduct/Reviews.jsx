import Button from "@components/Button/Button";
import FormItem from "./FormItem";
import styles from "./styles.module.scss";

function ReviewProducts() {
  const {
    containerReview,
    reviews,
    noReview,
    replyForm,
    replyTitle,
    commentNotes,
    commentFormCookiesConsent,
    btnSubmit,
  } = styles;
  return (
    <div className={containerReview}>
      <div className={reviews}>REVIEWS</div>

      <p className={noReview}>There are no reviews yet.</p>

      <div className={replyForm}>
        <div className={replyTitle}>
          BE THE FIRST TO REVIEW "10K YELLOW GOLD"
        </div>

        <p className={commentNotes}>
          Your email address will not be published. Required fileds are marked
        </p>
        <form action="">
          {/* Rating */}
          <FormItem
            label={"Your rating"}
            isRequired={true}
            typeChildren={"rating"}
          />
          {/*Area*/}
          <FormItem
            label={"Your review"}
            isRequired={true}
            typeChildren={"textarea"}
          />

          {/* Name*/}
          <FormItem label={"Name"} isRequired={true} typeChildren={"input"} />

          {/* Email */}
          <FormItem label={"Email"} isRequired={true} typeChildren={"input"} />
          <div className={commentFormCookiesConsent}>
            <input type="checkbox" />
            <span>
              Save my name, email and website in this browser for the next time
              I comment
            </span>
          </div>

          <div className={btnSubmit}>
            <Button content={"SUBMIT"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewProducts;

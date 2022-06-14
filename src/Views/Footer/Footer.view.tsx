import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterView = () => {
    const { t } = useTranslation();
  return (
    <div><footer className="overview-block-pt">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-5 col-lg-8">
                <div className="about-info">
                    <img className="img-fluid iq-mb-20" src="images/logo.png" alt="logo"/>
                    <p>{t("components.history.table.home.titleFooter")}</p>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 re-9-mt-40">
                <div className="footer-list">
                    <h5 className="iq-fw-4">{t("components.history.table.home.know")}</h5>
                    <ul>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.aboutUs")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.support")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.blog")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.resp")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.careers")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.press")}</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 re-mt-40">
                <div className="footer-list">
                    <h5 className="iq-fw-4">{t("components.history.table.home.business")}</h5>
                    <ul>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.partners")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.propgram")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.reseller")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.commercial")}</a></li>
                        <li><a href="javascript:void(0)">{t("components.history.table.home.inscape")}</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 re-mt-40">
                <div className="footer-from">
                    <h5 className="iq-fw-4">{t("components.history.table.home.joinEmail")}</h5>
                    <p>{t("components.history.table.home.update")}</p>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder={t("components.history.table.home.emailPlaceholder")}/>
                            <a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a>
                        </div>
                    </form>
                    <ul className="info-share">
                        <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fab fa-google"></i></a></li>
                        <li><a href="javascript:void(0)"><i className="fab fa-github-alt"></i></a></li>
                    </ul>
                </div>
            </div>
            <hr className="iq-mt-60"/>
            <div className="col-sm-12 text-center">
                <div className="footer-copyright iq-pt-20 iq-pb-20">{t("components.history.table.home.copyright")}<a target="_blank"
                href="index-2.html#">iqonicthemes</a>.</div>
            </div>
        </div>
    </div>
</footer></div>
  )
}

export default FooterView
using NWebsec.Csp;

namespace NWebSecDemo.App_Start
{
    public class Global : Sitecore.Web.Application
    {
        protected void NWebSecHttpHeaderSecurityModule_CspViolationReported(object sender, CspViolationReportEventArgs e)
        {
            var report = e.ViolationReport;
            string msg =
                $"CSP - Blocked : {report.Details.BlockedUri}, which violated : {report.Details.ViolatedDirective} and Referrer : {report.Details.Referrer}";
            Sitecore.Diagnostics.Log.Warn(msg, sender);
        }
    }
}
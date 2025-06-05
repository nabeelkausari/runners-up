import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: June 2024</p>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            This Privacy Policy describes how Procineography Private Limited
            ("we", "our", or "us") collects, uses, and shares your personal
            information when you use our website.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Who we are
              </h2>
              <p className="text-gray-700">
                Our website address is: https://procineography.store. We are
                Procineography private limited, and you can contact us at
                hello@procineography.store.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Comments
              </h2>
              <p className="text-gray-700 mb-4">
                When visitors leave comments on the site we collect the data
                shown in the comments form, and also the visitor's IP address
                and browser user agent string to help spam detection.
              </p>
              <p className="text-gray-700">
                An anonymized string created from your email address (also
                called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is
                available here: https://automattic.com/privacy/. After approval
                of your comment, your profile picture is visible to the public
                in the context of your comment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Media
              </h2>
              <p className="text-gray-700">
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookies will last
                for one year.
              </p>
              <p className="text-gray-700 mb-4">
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </p>
              <p className="text-gray-700 mb-4">
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a
                year. If you select "Remember Me", your login will persist for
                two weeks. If you log out of your account, the login cookies
                will be removed.
              </p>
              <p className="text-gray-700">
                If you edit or publish an article, an additional cookie will be
                saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It
                expires after 1 day.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Embedded content from other websites
              </h2>
              <p className="text-gray-700 mb-4">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>
              <p className="text-gray-700">
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Who we share your data with
              </h2>
              <p className="text-gray-700">
                If you request a password reset, your IP address will be
                included in the reset email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How long we retain your data
              </h2>
              <p className="text-gray-700 mb-4">
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and approve
                any follow-up comments automatically instead of holding them in
                a moderation queue.
              </p>
              <p className="text-gray-700">
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What rights you have over your data
              </h2>
              <p className="text-gray-700">
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Where we send your data
              </h2>
              <p className="text-gray-700 mb-4">
                Visitor comments may be checked through an automated spam
                detection service.
              </p>
              <p className="text-gray-700">
                For any questions about this Privacy Policy, please contact us
                at: hello@procineography.store
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

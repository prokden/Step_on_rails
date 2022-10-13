// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "jquery";
import "jquery_ujs";
import "popper";
import "bootstrap";

Rails.start();
Turbolinks.start();
ActiveStorage.start();
import * as bootstrap from "bootstrap"

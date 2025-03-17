const Article = require("../models/Article");

const createArticle = async (data) => {
  const article = new Article(data);
  return await article.save();
};

const getAllArticles = async () => {
  return await Article.find();
};

const updateArticle = async (id, data) => {
  return await Article.findByIdAndUpdate(id, data, { new: true });
};

const deleteArticle = async (id) => {
  return await Article.findByIdAndDelete(id);
};

module.exports = {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle,
};

// Copyright 2025 alpha
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
